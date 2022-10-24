class User < ApplicationRecord
    has_secure_password
    has_many :dogs, dependent: :destroy

    
    validates :username, uniqueness: true
    validates :username, :password, :first_name, :last_name, :about_me, :profile_pic, presence: true 



    #!!
    # accepts_nested_attributes_for :dogs, allow_destroy: true
    # has_many :requested_playdates, through: :dogs
    # has_many :hosted_playdates, through: :dogs
    
    #!!
    
end
