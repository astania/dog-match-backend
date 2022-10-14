class Playdate < ApplicationRecord
    has_many :playdate_requested_dogs
    has_many :dogs, through: :playdate_requested_dogs


end
