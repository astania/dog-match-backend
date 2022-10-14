class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :dog_id
  has_many :dogs
end
