class PlayDateDogsController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    def index 
      play_date_dogs = PlayDateDog.all 
      render json: play_date_dogs
    end 
    
    def create
      play_date_dog = PlayDateDog.create(play_date_dog_params)
      if play_date_dog.valid?
        render json: play_date_dog, status: :created
      end
    end
    
    def show
      find_play_date_dog
      if @play_date_dog
        render json: @play_date_dog
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    def update 
      find_play_date_dog
      if @play_date_dog&.update(play_date_dog_params) 
        render json: @play_date_dog
      else 
        render json: {error: "Not found"}, status: :not_found
      end 
    end 
  
    def destroy 
      find_play_date_dog
      if @dog&.destroy 
        render json: {messages: "Record successfully destroyed"}
      else 
        render json: {error: "Not found"}, status: :not_found
      end 
    end  
  
    private 
  
    def find_play_date_dog
      @play_date_dog = PlayDateDog.find_by_id(params[:id])
    end 
  
    def play_date_dog_params 
      params.permit(:requested_dog_id, :dog_id, :play_date_id)
    end 
  
    def render_unprocessable_entity(invalid)
      render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end 
end
