class Dog < ApplicationRecord
    belongs_to :user
    has_many :playdate_requested_dogs, dependent: :destroy

    has_many :requested_playdates, through: :playdate_requested_dogs, :source => "playdate", dependent: :destroy
    has_many :hosted_playdates, :foreign_key => "dog_id", :class_name => "Playdate", dependent: :destroy

    validates :name, :breed, :user_id, :profile_pic, :about_me, presence: true 
   

end



