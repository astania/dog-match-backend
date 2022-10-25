class PlaydateRequestedDog < ApplicationRecord
    belongs_to :dog
    belongs_to :playdate

    validates :dog_id, :playdate_id, presence: true 
end
