class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        render json: { count: cookies[:count] }
      end
    
end
