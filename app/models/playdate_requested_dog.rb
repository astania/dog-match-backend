class PlaydateRequestedDog < ApplicationRecord
    belongs_to :dog
    belongs_to :playdate
end
