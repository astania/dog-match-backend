class HostedPlaydatesSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :invited_dogs
end
