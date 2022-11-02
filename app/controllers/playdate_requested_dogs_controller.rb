class PlaydateRequestedDogsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def create
      playdate_requested_dog = PlaydateRequestedDog.create!(playdate_requested_dog_params)
      if playdate_requested_dog.valid?
        render json: playdate_requested_dog, status: :created
      end
    end
  
    def destroy 
      find_playdate_requested_dog
      if @dog&.destroy 
        render json: {messages: "Record successfully destroyed"}
      end 
    end  
  
    private 
  
    def find_playdate_requested_dog
      @playdate_requested_dog = PlaydateRequestedDog.find_by_id(params[:id])
    end 
  
    def playdate_requested_dog_params 
      params.permit(:playdate_id,:dog_id, :accepted)
    end 
  
    def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 

    def render_not_found_response(invalid)
      render json: {errors: invalid.record.errors.full_messages }, status: :not_found
    end 

end
