class HostedPlaydatesSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :host_dog, :invited_dogs
end
