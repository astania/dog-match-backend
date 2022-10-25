class Playdate < ApplicationRecord
   
    has_many :playdate_requested_dogs, dependent: :destroy
    has_many :dogs, through: :playdate_requested_dogs
    belongs_to :host_dog, :foreign_key => "dog_id", :class_name => "Dog"
    has_many :invited_dogs, through: :playdate_requested_dogs, :source => "dog"
    
    validates :date, :time, :notes, :dog_id, presence: true  
    
    

    

end
