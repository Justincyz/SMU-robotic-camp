def add_post():
    """Here you get a new post and add it.  Return what you want."""
    # Implement me!
    p_id = db.post.insert(
        FirstName=request.vars.FirstName,
        LastName=request.vars.LastName,
        birthday=request.vars.birthday,
        mailing=request.vars.mailing,
        email=request.vars.email,
        phone=request.vars.phone,
        school=request.vars.school,
        gpa=request.vars.gpa,
        emergency=request.vars.emergency,
        teacher=request.vars.teacher,
    )

    p = db.post(p_id)
    return response.json(dict(post=p))






