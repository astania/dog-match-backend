class Playdate < ApplicationRecord
    has_many :playdate_requested_dogs
    has_many :dogs, through: :playdate_requested_dogs
    # belongs_to :host_dog, :class_name => "Dog"
    belongs_to :dog

end
