class PlayDateDogSerializer < ActiveModel::Serializer
  attributes :id, :requester_dog_id, :requested_dog_id, :play_date_id
end
