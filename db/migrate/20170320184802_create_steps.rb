class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.text :body
      t.integer :order, null: false
      t.integer :article_id, null: false

      t.timestamps
    end
  end
end
