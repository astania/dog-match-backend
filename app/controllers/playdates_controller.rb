class PlaydatesController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    # def index 
    #   playdates = Playdate.all 
    #   render json: playdates
    # end 
    
    def create
      playdate = Playdate.create!(playdate_params)
      if playdate.valid?
        params[:requested_dogs].each{|dog| PlaydateRequestedDog.create!(playdate_id: playdate.id, dog_id: dog)}
        render json: playdate
      end
    end
    
    # def show
    #   find_playdate
    #   if @playdate
    #     render json: @playdate
    #   end
    # end
  
    # def update 
    #   find_playdate
    #   if @playdate&.update!(playdate_params) 
    #     render json: @playdate
    #   end 
    # end 
  
    def destroy 
      find_playdate
      if @playdate&.destroy 
        render json: {messages: "Record successfully destroyed"}
      else 
        render json: {error: "Playdate not found"}, status: :not_found
      end 
    end 
  
    private 
  
    def find_playdate
      @playdate = Playdate.find_by_id(params[:id])
    end 
  
    def playdate_params 
      params.permit(:dog_id, :date, :time, :notes)
    end 
  
    def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 

end
