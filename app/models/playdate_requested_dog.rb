class PlaydateRequestedDog < ApplicationRecord
    belongs_to :dog
    belongs_to :playdate
    # belongs_to :requested_dog, :class_name => "Dog" 

end
