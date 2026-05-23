/**
 * @swagger
 * /profile/{id}:
 *   get:
 *     summary: Get user profile
 *     description: API lấy thông tin profile của user theo id
 *     tags:
 *       - Profile
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *         example: 1
 *
 *     responses:
 *       200:
 *         description: Get profile successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *
 *                 message:
 *                   type: string
 *                   example: Get profile successfully
 *
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *
 *                     name:
 *                       type: string
 *                       example: Tran Ngoc Can
 *
 *                     email:
 *                       type: string
 *                       example: ngoccan@gmail.com
 *
 *                     role:
 *                       type: string
 *                       example: ADMIN
 *
 *       401:
 *         description: Unauthorized
 *
 *       404:
 *         description: User not found
 *
 *       500:
 *         description: Internal server error
 */