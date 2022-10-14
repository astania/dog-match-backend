class Dog < ApplicationRecord
    belongs_to :user
    has_many :playdate_requested_dogs
    # has_many :playdates, through: :playdate_requested_dogs
    has_many :requested_playdates, through: :playdate_requested_dogs, :source => "dog"
    has_many :hosted_playdates, :foreign_key => "dog_id", :class_name => "Playdate"
   
   
end



