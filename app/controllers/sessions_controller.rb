class SessionsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create

    def destroy 
        session.delete :user_id 
        head :no_content
    end

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['dogs', 'dogs.requested_playdates', 'dogs.hosted_playdates']
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end 

    end 
end
