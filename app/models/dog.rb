class Dog < ApplicationRecord
    belongs_to :user
    has_many :playdate_requested_dogs
    has_many :playdates, through: :playdate_requested_dogs

   
end



