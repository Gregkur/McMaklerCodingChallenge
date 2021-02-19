class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :size
      t.string :year
      t.integer :rooms
      t.string :rent
      t.string :building
      t.string :state

      t.timestamps
    end
  end
end
