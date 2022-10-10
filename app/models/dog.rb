class Dog < ApplicationRecord
    belongs_to :user
    has_many :play_date_dogs
    has_many :play_dates, through: :play_date_dogs
   
end



