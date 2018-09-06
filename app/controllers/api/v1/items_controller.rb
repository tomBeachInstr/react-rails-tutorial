class Api::V1::ItemsController < Api::V1::BaseController
  def index
    puts "\n ******* items:index *******"
    respond_with Item.all
  end

  def create
    puts "\n ******* items:create *******"
    respond_with :api, :v1, Item.create(item_params)
  end

  def destroy
    puts "\n ******* items:destroy *******"
    respond_with Item.destroy(params[:id])
  end

  def update
    puts "\n ******* items:update *******"
    item = Item.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item
  end

  private

  def item_params
    puts "\n ******* items:item_params *******"
    params.require(:item).permit(:id, :name, :description)
  end
end
