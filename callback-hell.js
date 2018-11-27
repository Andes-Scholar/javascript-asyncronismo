User.findOne({ name: 'daniel' }, function (error, user) {
    if (error) {
        console.log(error);
    } else {
        Turnos.find({ user_id: user.id }, function (error2, turnos) {
            if (error2) {
                console.log(error);
            } else {

                Prestaciones.findOne({ user_id: user.id }, function (error3, user) {
                    if (error3) {
                        console.log(error);
                    } else {

                        Prestaciones.findOne({ user_id: user.id }, function (error4, user) {
                            if (error4) {
                                console.log(error);
                            } else {

                                Prestaciones.findOne({ user_id: user.id }, function (error4, user) {
                                    if (error4) {
                                        console.log(error);
                                    } else {


                                    }
                                });

                            }
                        });

                    }
                });

            }
        });
    }
});