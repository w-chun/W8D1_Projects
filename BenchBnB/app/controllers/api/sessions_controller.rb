class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
    params[:user][:password])
    if @user
      login(@user)
    else
      render json: @user.errors
    end
  end

  def destroy
    if logout!
      render json: {}
    else
      render json: ["Unable to log out user"], status: 404
    end
  end

end
