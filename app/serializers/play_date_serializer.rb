class PlayDateSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes
  has_many :play_date_dogs
  has_many :dogs
end
