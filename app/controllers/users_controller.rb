class UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorized, only: :create
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update 
    user = User.find_by(id: session[:user_id])
    if user 
      user.update(user_params)
      render json: user
    else 
      render json: {error: "User not found"}, status: :not_found
    end 
  end 

  private 

  def user_params 
    params.permit(:username, :password, :first_name, :last_name, :about_me, :profile_pic)
  end 

  def render_unprocessable_entity(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end 


end
