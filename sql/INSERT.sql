INSERT INTO user_role (role_name)
VALUES
  ('Administrador'),
  ('Gerente general de promociones'),
  ('Jefe de pasillos'),
  ('Jefe de compras'),
  ('Recursos humanos'),
  ('Cajero'),
  ('Entrega'),
  ('Despacho'),
  ('Proveedor'),
  ('Cliente');
INSERT INTO regist_user (user_name, user_password, user_fk_role)
VALUES
  ('admin1', 'Personal1!', 1),
  ('gPromos1', 'Personal1!', 2),
  ('jPasillos1', 'Personal1!', 3),
  ('jCompras1', 'Personal1!', 4),
  ('rh1', 'Personal1!', 5),
  ('cajero1', 'Personal1!', 6),
  ('entrega1', 'Personal1!', 7),
  ('despacho1', 'Personal1!', 8),
  ('DistribGen1', 'Personal1!', 9),
  ('JhonDoe2', 'Cliente1!', 10),
  ('RefriServicios3', 'Cliente1!', 10);