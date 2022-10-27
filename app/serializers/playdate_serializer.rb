class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :host_dog, :invited_dogs
  
  belongs_to :host_dog
  has_many :invited_dogs


    
end
