class CreateArticleImages < ActiveRecord::Migration[5.0]
  def change
    create_table :article_images do |t|
      t.string :url
      t.integer :article_id
      
      t.timestamps
    end
  end
end
