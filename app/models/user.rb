class User < ApplicationRecord
    has_secure_password
    has_many :dogs, dependent: :destroy
    #!!
    accepts_nested_attributes_for :dogs, allow_destroy: true
    # has_many :requested_playdates, through: :dogs
    # has_many :hosted_playdates, through: :dogs
    
    #!!
    
end
