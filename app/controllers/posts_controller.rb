class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  include PostsHelper

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
    @recommended_posts = []

    if current_user
      user_profile = Profile.find(current_user.id)
      Post.all.each do |post|
        poster_profile = Profile.find(post.profile_id)
        if poster_profile.sr < user_profile.sr
          role_match = []
          poster_profile.roles.each { |role| role_match.push(user_profile.roles.include? role) }
          if role_match.include? true
            @recommended_posts.push(post)
          end
        end
      end
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:profile_id, :title, :link, :coachability, :video, :thumbnail)
    end
end
