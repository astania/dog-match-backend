class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    def destroy 
        session.delete :user_id 
        head :no_content
    end

    def create 
        user = User.find_by(username: params[:user][:username])
        if user&.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: session, status: :created
        else 
            render json: {error: {login: "Invalid username or password"} }, status: :unauthorized
        end 

    end 
end
