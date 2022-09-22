class UpdateUserAttributeNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :firstName, :first_name
    rename_column :users, :lastName, :last_name
    rename_column :users, :aboutMe, :about_me
    rename_column :users, :profilePic, :profile_pic
  end
end
