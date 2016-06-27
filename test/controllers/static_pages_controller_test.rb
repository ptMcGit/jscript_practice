require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get js_page" do
    get :js_page
    assert_response :success
  end

end
