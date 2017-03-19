class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :articles, :user_id
  end
end
