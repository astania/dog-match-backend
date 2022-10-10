class PlayDate < ApplicationRecord
    has_many :dogs
    has_many :play_date_dogs, through: :dogs
end
