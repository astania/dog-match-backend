class FallbackController < ActionController::Base
    # must inherit from ActionController::Base in order to render HTML
    def index
        render file: 'public/index.html'
    end
end
