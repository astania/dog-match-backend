class PlayDatesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    def index 
      play_dates = PlayDate.all 
      render json: play_dates
    end 
    
    def create
      play_date = PlayDate.create(play_date_params)
      if play_date.valid?
      #   session[:user_id] = user.id
        render json: play_date, status: :created
      end
    end
    
    def show
      find_play_date
      if @play_date
        render json: @play_date
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    def update 
      find_play_date
      if @play_date&.update(play_date_params) 
        render json: @play_date
      else 
        render json: {error: "Play date not found"}, status: :not_found
      end 
    end 
  
    def destroy 
      find_play_date
      if @play_date&.destroy 
        render json: {messages: "Record successfully destroyed"}
      else 
        render json: {error: "Play date not found"}, status: :not_found
      end 
    end 
  
    private 
  
    def find_play_date
      @play_date = PlayDate.find_by_id(params[:id])
    end 
  
    def play_date_params 
      params.permit(:first_dog_id, :second_dog_id, :date, :id, :time, :notes)
    end 
  
    def render_unprocessable_entity(invalid)
      render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end 
end
