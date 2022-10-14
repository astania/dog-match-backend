class PlaydateRequestedDogsController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    def index 
      playdate_requested_dogs = PlaydateRequestedDog.all 
      render json: playdate_requested_dogs
    end 
    
    def create
      playdate_requested_dog = PlaydateRequestedDog.create(playdate_dog_params)
      if playdate_requested_dog.valid?
        render json: playdate_requested_dog, status: :created
      end
    end
    
    def show
      find_playdate_requested_dog
      if @playdate_requested_dog
        render json: @playdate_requested_dog
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    def update 
      find_playdate_requested_dog
      if @playdate_requested_dog&.update(playdate_requested_dog_params) 
        render json: @playdate_requested_dog
      else 
        render json: {error: "Not found"}, status: :not_found
      end 
    end 
  
    def destroy 
      find_playdate_requested_dog
      if @dog&.destroy 
        render json: {messages: "Record successfully destroyed"}
      else 
        render json: {error: "Not found"}, status: :not_found
      end 
    end  
  
    private 
  
    def find_playdate_requested_dog
      @playdate_requested_dog = PlaydateRequestedDog.find_by_id(params[:id])
    end 
  
    def play_date_requested_dog_params 
      params.permit(:playdate_id,:dog_id, :accepted)
    end 
  
    def render_unprocessable_entity(invalid)
      render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end 

end
