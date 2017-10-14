
db.define_table('post',

                Field('FirstName', 'string'),
                Field('LastName', 'string'),
                Field('birthday', 'text'),
                Field('mailing', 'text'),
                Field('email', 'text'),
                Field('phone', 'integer'),
                Field('school', 'text'),
                Field('gpa', 'integer'),
                Field('emergency', 'text'),
                Field('teacher', 'string'),

                )


db.post.FirstName.requires = IS_NOT_EMPTY()
db.post.LastName.requires = IS_NOT_EMPTY()
db.post.birthday.requires = IS_NOT_EMPTY()
db.post.mailing.requires = IS_NOT_EMPTY()
db.post.email.requires = IS_NOT_EMPTY()
db.post.phone.requires = IS_NOT_EMPTY()
db.post.school.requires = IS_NOT_EMPTY()
db.post.gpa.requires = IS_NOT_EMPTY()
db.post.emergency.requires = IS_NOT_EMPTY()
db.post.teacher.requires = IS_NOT_EMPTY()

