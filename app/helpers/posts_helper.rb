module PostsHelper

  def get_student_rank(post_id)
    sr = Profile.find(Post.find(post_id).profile_id).sr

    case
    when sr < 1500
      then '1'
    when sr >= 1500 && sr < 2000
      then '2'
    when sr >= 2000 && sr < 2500
      then '3'
    when sr >= 2500 && sr < 3000
      then '4'
    when sr >= 3000 && sr < 3500
      then '5'
    when sr >= 3500 && sr < 4000
      then '6'
    when sr > 4000
      then '7'
    end
  end

  def get_profile(post_id)
    Profile.find(Post.find(post_id).profile_id)
  end

end
