import { Joi, Segments, celebrate } from "celebrate";

export const createLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<Launch>().keys({
    launchCode: Joi.string().required(),
    date: Joi.string().required(),
    success: Joi.boolean().required(),
    rocketId: Joi.number().required(),
  }),
});

export const updateLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<Launch>().keys({
    launchCode: Joi.string(),
    date: Joi.string(),
    success: Joi.boolean(),
    rocketId: Joi.number(),
  }),
});
