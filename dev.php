<?php
/**
 * Arquivo de configuração para desenvolvimento local.
 *
 * Deve ser feita uma copia desse arquivo com
 * o nome `dev-local.php` e editar as constantes necessárias.
 *
 * Por padrão o DEBUG está ativo no ambiente local, o arquivo com os
 * logs pode ser encontrado em `wp-content/debug.log`.
 */
define( 'DB_NAME',          'wp' );
define( 'DB_USER',          'root' );
define( 'DB_PASSWORD',      'secret' );
define( 'DB_HOST',          'db' );
define( 'WP_DEBUG',         true );
define( 'WP_DEBUG_LOG',     true );
define( 'WP_DEBUG_DISPLAY', true );
ini_set( 'display_errors',  1 );
error_reporting( E_ALL );
