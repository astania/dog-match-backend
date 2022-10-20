class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :dog_id
  has_many :dogs
  has_many :playdate_requested_dogs, if: :condition
  # has_many :accepted_dogs
  # has_many :pending_dogs
  # has_many :declined_dogs
  
  def condition 
    @instance_options [:flag] != "restrict"
  end 
    
end
