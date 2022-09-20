class SessionsController < ApplicationController

    # def hello_world
    #     session[:count] ||= 0
    #     session[:count] += 1
    #     render json: { count: session[:count] }
    # end 

    def destroy 
        session.delete :user_id 
        head :no_content
    end 

    def create 
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id 
        render json: user 
    end 
end
