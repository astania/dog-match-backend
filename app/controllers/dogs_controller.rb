class DogsController < ApplicationController
    wrap_parameters format: []
  skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index 
    dogs = Dog.all 
    render json: dogs
  end 
  
  def create
    dog = Dog.create!(dog_params)
    if dog.valid?
      render json: dog, status: :created
    end
  end

  def update 
    find_dog
    if @dog&.update!(dog_params) 
      render json: @dog
    end 
  end 

  def destroy 
    find_dog
    if @dog&.destroy 
      render json: {messages: "Record successfully destroyed"}
    end 
  end 

  private 

  def find_dog
    @dog = Dog.find_by_id(params[:id])
  end 

  def dog_params 
    params.permit(:name, :breed, :user_id, :about_me, :profile_pic)
  end 

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

  def render_not_found_response(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :not_found
  end 

end
