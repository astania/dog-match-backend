class User < ApplicationRecord
    has_secure_password
    has_many :dogs, dependent: :destroy

    
    validates :username, uniqueness: true
    validates :username, :first_name, :last_name, :about_me, :profile_pic, presence: true 

    # def full_name 
    #     "#{self.first_name} #{self.last_name}"
    # end 

    
end
