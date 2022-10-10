class PlayDateSerializer < ActiveModel::Serializer
  attributes :id, :first_dog_id, :second_dog_id, :date, :time, :notes
end
