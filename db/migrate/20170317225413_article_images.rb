class ArticleImages < ActiveRecord::Migration[5.0]
  def change
    create_table :article_images do |t|
      t.integer :article_id, null: false
      t.string :image_url, null: false
    end
  end
end
