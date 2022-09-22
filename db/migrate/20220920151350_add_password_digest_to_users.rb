class AddPasswordDigestToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :password_digest, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :about_me, :string
    add_column :users, :profile_pic, :string
  end
end
