const selectEntityFromResult = (entityId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => {
    return entityId === id;
  }),
});

export const selectRestaurantFromResult = selectEntityFromResult;
export const selectUserFromResult = selectEntityFromResult;
